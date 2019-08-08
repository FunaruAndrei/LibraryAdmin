using BibliotecaOnline.DbModels;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BibliotecaOnline.Areas.Identity.DbModels
{
    public class BibliotecaUser:IdentityUser<int>
    {
        public ICollection<WishList> WishLists { get; set; }
        public ICollection<Review> Reviews { get; set; }
        public ICollection<LoanRequest> LoanRequests { get; set; }
        public ICollection<Loan> Loans { get; set; }
    }
}
