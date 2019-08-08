using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BibliotecaOnline.Models;
using BibliotecaOnline.Models.Library;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BibliotecaOnline.Controllers.API
{
    [Route("api/[controller]")]
    [ApiController]
    public class LibraryController : Controller
    {
        private readonly BibliotecaOnlineContext _context;

        public LibraryController(BibliotecaOnlineContext context)
        {
            _context = context;
        }



        [HttpGet("GetBooks")]
        public async Task<JsonResult> GetBooks(int? GenreId = null, int? AutorId = null, int? An = null)
        {

            List<Book> books = await this._context.Books.Where(e => (GenreId == null || e.BookGenres.Any(z => z.GenreId == GenreId)) &&
                                                             (AutorId == null || e.BookAuthors.Any(z => z.AuthorId == AutorId)) &&
                                                             (An == null || (e.Year == null ? true : e.Year.Value.Year == An))).
                                                             Select(e => new Book()
                                                             {
                                                                 BookId = e.BookId,
                                                                 ImageUrl = e.ImageUrl,
                                                                 Title = e.Title
                                                             }).
                                                             ToListAsync();

            foreach (Book book in books)
            {
                book.Genres = await this._context.BookGenres.Where(e => e.BookId == book.BookId).Select(e => e.Genre).ToListAsync();
                book.Authors = await this._context.BookAuthors.Where(e => e.BookId == book.BookId).Select(e => e.Author).ToListAsync();
                book.Stores = await this._context.BookStores.Include(e=>e.Store).Where(e => e.BookId == book.BookId && e.Stock > 0).Select(
                        e=>new DbModels.BookStore() {
                            Book = e.Book,
                            BookId = e.BookId,
                            Store = e.Store,
                            StoreId = e.StoreId,
                            Stock = e.Stock - _context.Loans.Where(z=>z.BookId==e.BookId && z.StoreId == e.StoreId && z.Returned==false).Count()
                                            - _context.LoanRequests.Where(z=>z.BookId == e.BookId && z.StoreId == e.StoreId && z.Accepted == null).Count()
                        }
                    ).ToListAsync();
                var reviews = this._context.Reviews.Where(e => e.BookId == book.BookId).Select(e => e.Rate);

                if(reviews.Count() > 0)
                {
                    book.Rate = reviews.Average();
                }
                else
                {
                    book.Rate = 0;
                }

                if (User.Identity.IsAuthenticated)
                {
                    var usr = this._context.BibliotecaUser.Where(e => e.UserName == User.Identity.Name).FirstOrDefault();

                    book.Wish = this._context.WishLists.Where(e => e.BibliotecaUserId == usr.Id && e.BookId == book.BookId).Count() > 0 ? true : false;
                    book.Loan = this._context.Loans.Where(e => e.BibliotecaUserId == usr.Id && e.BookId == book.BookId && e.Returned == false).Any() ? "Imprumutate" : "";

                    if (book.Loan == "")
                    {
                        book.Loan = this._context.LoanRequests.Where(e => e.BibliotecaUserId == usr.Id && e.BookId == book.BookId && e.Accepted == null).Any() ? "Pending" : "";
                    }


                }
            }

            return Json(books);

        }

        [HttpGet("GetBook")]
        public JsonResult GetBook(int BookId)
        {
            BookDetail book = this._context.Books.Where(e => e.BookId == BookId)
                                                 .Include(e => e.BookAuthors).ThenInclude(e => e.Author)
                                                 .Include(e => e.BookGenres).ThenInclude(e => e.Genre)
                                                 .Include(e => e.BookStores).ThenInclude(e => e.Store)
                                                 .Include(e => e.Reviews).ThenInclude(e=>e.BibliotecaUser)
                                                 .Select(e => new BookDetail()
                                                 {
                                                     BookId = e.BookId,
                                                     Editura = e.Editura,
                                                     Description = e.Description,
                                                     BuyPrice = e.BuyPrice,
                                                     ISBN = e.ISBN,
                                                     Language = e.Language,
                                                     NrOfPages = e.NrOfPages,
                                                     Year = e.Year,
                                                     ImageUrl = e.ImageUrl,
                                                     Title = e.Title,
                                                     Authors = e.BookAuthors.Select(z => z.Author).ToList(),
                                                     Genres = e.BookGenres.Select(z => z.Genre).ToList(),
                                                     Reviews = e.Reviews.ToList(),
                                                     Stores = e.BookStores.ToList()
                                                 }).FirstOrDefault();

            foreach( var rev in book.Reviews)
            {
                rev.BibliotecaUser = _context.BibliotecaUser.Where(e => e.Id == rev.BibliotecaUserId).Select(e => new Areas.Identity.DbModels.BibliotecaUser()
                {
                    UserName = e.UserName
                }).FirstOrDefault();
            }

            foreach (var str in book.Stores)
            {
                str.Store = _context.Stores.Where(e => e.StoreId == str.StoreId).FirstOrDefault();

                str.Stock = str.Stock - _context.Loans.Where(z => z.BookId == book.BookId && z.StoreId == str.StoreId && z.Returned == false).Count()
                                       - _context.LoanRequests.Where(z => z.BookId == book.BookId && z.StoreId == str.StoreId && z.Accepted == null).Count();
                                       
            }

            if (User.Identity.IsAuthenticated)
            {
                var usr = this._context.BibliotecaUser.Where(e => e.UserName == User.Identity.Name).FirstOrDefault();

                book.Wish = this._context.WishLists.Where(e => e.BibliotecaUserId == usr.Id && e.BookId == book.BookId).Count() > 0 ? true : false;
                book.Loan = this._context.Loans.Where(e => e.BibliotecaUserId == usr.Id && e.BookId == book.BookId && e.Returned == false).Any() ? "Imprumutate" : "";

                if (book.Loan == "")
                {
                    book.Loan = this._context.LoanRequests.Where(e => e.BibliotecaUserId == usr.Id && e.BookId == book.BookId && e.Accepted == null).Any() ? "Pending" : "";
                }



            }

            return Json(book);
        }

        [HttpGet("GetAuthors")]
        public async Task<JsonResult> GetAuthors()
        {
            return Json(await this._context.Authors.ToListAsync());
        }


        [HttpGet("GetGenres")]
        public async Task<JsonResult> GetGenres()
        {
            return Json(await this._context.Genres.ToListAsync());
        }

        [Authorize]
        [HttpPost("AddRemoveWishList")]
        public async Task<IActionResult> AddRemoveWishList(WishListReq req)
        {
            if (req.WishListed == false)
            {
                BibliotecaOnline.DbModels.WishList wish = _context.WishLists.Where(e => e.BookId == req.BookId && e.BibliotecaUserId == req.UserId).FirstOrDefault();

                if (wish != null)
                {
                    _context.WishLists.Remove(wish);
                }
            }
            else
            {
                _context.WishLists.Add(new BibliotecaOnline.DbModels.WishList()
                {
                    AddDate = DateTime.Now,
                    BibliotecaUserId = req.UserId,
                    BookId = req.BookId
                });
            }

            try
            {
                await _context.SaveChangesAsync();
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [Authorize]
        [HttpPost("AddReviewReq")]
        public async Task<IActionResult> AddReviewReq(ReviewReq req)
        {

            try
            {
                var id = this._context.Reviews.Select(e => e.ReviewId).Max() + 1;

                this._context.Reviews.Add(new DbModels.Review()
                {
                    BibliotecaUserId = req.UserId,
                    BookId = req.BookId,
                    Data = DateTime.Now,
                    Rate = req.Rate,
                    Text = req.Text,
                    ReviewId = id
                });

                await this._context.SaveChangesAsync();

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }

        }

        [Authorize]
        [HttpGet("GetWishList")]
        public async Task<JsonResult> GetWishList(int UserId)
        {

            try
            {
                List<Book> books = await this._context.Books.Where(e => e.WishLists.Where(z => z.BibliotecaUserId == UserId && e.BookId == z.BookId).Any())
                                                 .Include(e => e.BookAuthors).ThenInclude(e => e.Author)
                                                 .Include(e => e.BookGenres).ThenInclude(e => e.Genre)
                                                 .Include(e => e.BookStores).ThenInclude(e => e.Store)
                                                 .Include(e => e.Reviews).ThenInclude(e => e.BibliotecaUser)
                                                 .Select(e => new Book()
                                                 {
                                                     BookId = e.BookId,
                                                     ImageUrl = e.ImageUrl,
                                                     Title = e.Title,
                                                     Genres = e.BookGenres.Select(z=>z.Genre).ToList(),
                                                     Authors = e.BookAuthors.Select(z => z.Author).ToList()
                                                 }).ToListAsync();

                foreach(var book in books)
                {
                    var review = this._context.Reviews.Where(e => e.BookId == book.BookId).Select(e => e.Rate);

                    book.Rate = review.Count() > 0 ? review.Average() : 0;
                    

                        book.Wish = this._context.WishLists.Where(e => e.BibliotecaUserId == UserId && e.BookId == book.BookId).Count() > 0 ? true : false;
                        book.Loan = this._context.Loans.Where(e => e.BibliotecaUserId == UserId && e.BookId == book.BookId && e.Returned == false).Any() ? "Imprumutate" : "";

                        if (book.Loan == "")
                        {
                            book.Loan = this._context.LoanRequests.Where(e => e.BibliotecaUserId == UserId && e.BookId == book.BookId && e.Accepted == null).Any() ? "Pending" : "";
                        }
                        
                }

                return Json(books);
            }
            catch (Exception ex)
            {
                return Json(ex);
            }
        }

        [Authorize]
        [HttpPost("AddLoanRequest")]
        public async Task<IActionResult> AddLoanRequest(LoanReq req)
        {

            try
            {
                _context.LoanRequests.Add(new DbModels.LoanRequest()
                {
                    BibliotecaUserId = req.UserId,
                    BookId = req.BookId,
                    StoreId = req.StoreId,
                    Mention = req.Mention,
                    Data = DateTime.Now
                });

                await _context.SaveChangesAsync();

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }

        }
    }
}