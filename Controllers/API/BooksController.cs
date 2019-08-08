using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BibliotecaOnline.DbModels;
using BibliotecaOnline.Models;

namespace BibliotecaOnline.Controllers.API
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : Controller
    {
        private readonly BibliotecaOnlineContext _context;

        public BooksController(BibliotecaOnlineContext context)
        {
            _context = context;
        }

        // GET: api/Books
        [HttpGet]
        public async Task<JsonResult> GetBooks()
        {
            var x = await _context.Books.
                Include(e=>e.BookGenres).ThenInclude(e=>e.Genre)
                .Include(e=>e.BookAuthors).ThenInclude(e=>e.Author)
                .Include(e=>e.BookStores).ThenInclude(e=>e.Store)
                .ToListAsync();
            return Json(x);
        }

        // GET: api/Books/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Book>> GetBook(int id)
        {
            var book = await _context.Books.FindAsync(id);

            if (book == null)
            {
                return NotFound();
            }

            return book;
        }

        // PUT: api/Books/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBook(int id, Book book)
        {
            if (id != book.BookId)
            {
                return BadRequest();
            }

            var existingParent = _context.Books
        .Where(p => p.BookId == book.BookId)
        .Include(p => p.BookGenres)
        .Include(p => p.BookAuthors)
        .Include(p => p.BookStores)
        .SingleOrDefault();

            if (existingParent != null)
            {
                // Update parent
                _context.Entry(existingParent).CurrentValues.SetValues(book);

                // Delete children
                foreach (var existingChild in existingParent.BookGenres.ToList())
                {
                    if (!book.BookGenres.Any(c => c.GenreId == existingChild.GenreId))
                        _context.BookGenres.Remove(existingChild);
                }

                foreach (var existingChild in existingParent.BookAuthors.ToList())
                {
                    if (!book.BookGenres.Any(c => c.GenreId == existingChild.AuthorId))
                        _context.BookAuthors.Remove(existingChild);
                }

                foreach (var existingChild in existingParent.BookStores.ToList())
                {
                    if (!book.BookStores.Any(c => c.StoreId == existingChild.StoreId))
                        _context.BookStores.Remove(existingChild);
                }

                // Update and Insert children
                foreach (var childModel in book.BookGenres)
                {
                    var existingChild = existingParent.BookGenres
                        .Where(c => c.GenreId == childModel.GenreId)
                        .SingleOrDefault();

                    if (existingChild != null)
                        // Update child
                        _context.Entry(existingChild).CurrentValues.SetValues(childModel);
                    else
                    {
                        existingParent.BookGenres.Add(new BookGenre() { BookId= book.BookId, GenreId=childModel.GenreId });
                    }
                }

                foreach (var childModel in book.BookAuthors)
                {
                    var existingChild = existingParent.BookAuthors
                        .Where(c => c.AuthorId == childModel.AuthorId)
                        .SingleOrDefault();

                    if (existingChild != null)
                        // Update child
                        _context.Entry(existingChild).CurrentValues.SetValues(childModel);
                    else
                    {
                        existingParent.BookAuthors.Add(new BookAuthor() { BookId = book.BookId, AuthorId = childModel.AuthorId });
                    }
                }

                foreach (var childModel in book.BookStores)
                {
                    var existingChild = existingParent.BookStores
                        .Where(c => c.StoreId == childModel.StoreId)
                        .SingleOrDefault();

                    if (existingChild != null)
                        // Update child
                        _context.Entry(existingChild).CurrentValues.SetValues(childModel);
                    else
                    {
                        existingParent.BookStores.Add(new BookStore() { BookId = book.BookId, StoreId = childModel.StoreId, Stock = childModel.Stock });
                    }
                }

            }

        
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                if (!BookExists(id))
                {
                    return NotFound();
                }
                else
                {
                    return BadRequest(ex);
                }
            }

            return NoContent();
        }

        // POST: api/Books
        [HttpPost]
        public async Task<ActionResult<Book>> PostBook(Book book)
        {
            
            var bookDb =  _context.Books.Add(new Book() {
                Title = book.Title,
                BuyPrice = book.BuyPrice,
                Description = book.Description,
                Editura = book.Editura,
                ISBN = book.ISBN,
                ImageUrl = book.ImageUrl,
                Language = book.Language,
                NrOfPages = book.NrOfPages,
                Year = book.Year
                
            });

            await _context.SaveChangesAsync();

            _context.BookGenres.AddRange(book.BookGenres.Select(e => new BookGenre() { BookId = bookDb.Entity.BookId, GenreId = e.GenreId }));
            _context.BookAuthors.AddRange(book.BookAuthors.Select(e => new BookAuthor() { BookId = bookDb.Entity.BookId, AuthorId = e.AuthorId }));
            _context.BookStores.AddRange(book.BookStores.Select(e => new BookStore() { BookId = bookDb.Entity.BookId, StoreId = e.StoreId, Stock = e.Stock }));

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBook", new { id = book.BookId }, book);
        }

        // DELETE: api/Books/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Book>> DeleteBook(int id)
        {
            var book = await _context.Books.FindAsync(id);
            if (book == null)
            {
                return NotFound();
            }

            _context.Books.Remove(book);
            await _context.SaveChangesAsync();

            return book;
        }

        private bool BookExists(int id)
        {
            return _context.Books.Any(e => e.BookId == id);
        }
    }
}
