using BibliotecaOnline.DbModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BibliotecaOnline.Models.Library
{
    public class BookDetail
    {
        public int BookId { get; set; }
        public string Title { get; set; }
        public string ISBN { get; set; }
        public string ImageUrl { get; set; }
        public DateTime? Year { get; set; }
        public string Editura { get; set; }
        public string Description { get; set; }
        public int NrOfPages { get; set; }
        public double BuyPrice { get; set; }
        public string Language { get; set; }
        

        public string Loan { get; set; }
        public bool Wish { get; set; }

        public List<Review> Reviews { get; set; }
        public List<Genre> Genres { get; set; }
        public List<Author> Authors { get; set; }
        public List<BookStore> Stores { get; set; }
    }
}
