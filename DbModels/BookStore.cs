using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BibliotecaOnline.DbModels
{
    public class BookStore
    {
        public int BookId { get; set; }
        public Book Book { get; set; }
        public int StoreId { get; set; }
        public Store Store { get; set; }

        public int Stock { get; set; }
    }
}
