using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BibliotecaOnline.DbModels
{
    public class Store
    {
        [Key]
        public int StoreId { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Program { get; set; }


        public ICollection<BookStore> BookStores { get; set; }
        public ICollection<LoanRequest> LoanRequests { get; set; }
        public ICollection<Loan> Loans { get; set; }
    }
}
