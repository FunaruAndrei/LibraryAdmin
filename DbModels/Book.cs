using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BibliotecaOnline.DbModels
{
    public class Book
    {
        [Key]
        public int BookId { get; set; }
        public string Title { get; set; }
        [MaxLength(20)]
        public string ISBN { get; set; }
        public string ImageUrl { get; set; }
        public DateTime? Year { get; set; }
        public string Editura { get; set; }
        public string Description { get; set; }
        public int NrOfPages { get; set; }
        public double BuyPrice { get; set; }
        public string Language { get; set; }

        public virtual ICollection<BookGenre> BookGenres { get; set; }
        public ICollection<BookAuthor> BookAuthors { get; set; }
        public ICollection<BookStore> BookStores { get; set; }
        public ICollection<WishList> WishLists { get; set; }
        public ICollection<Review> Reviews { get; set; }
        public ICollection<LoanRequest> LoanRequests { get; set; }
        public ICollection<Loan> Loans { get; set; }
    }
}
