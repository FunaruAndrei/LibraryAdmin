using BibliotecaOnline.DbModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BibliotecaOnline.Models.Library
{
    public class Book
    {
        public int BookId { get; set; }
        public string Title { get; set; }
        public string ImageUrl { get; set; }
        public double Rate { get; set; }

        public string Loan { get; set; }
        public bool Wish { get; set; }

        public List<Genre> Genres { get; set; }
        public List<Author> Authors { get; set; }
        public List<BookStore> Stores { get; set; }
    }
}
