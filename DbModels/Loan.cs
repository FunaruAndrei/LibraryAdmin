using BibliotecaOnline.Areas.Identity.DbModels;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BibliotecaOnline.DbModels
{
    public class Loan
    {
        [Key]
        public int LoanId { get; set; }
        public DateTime Data { get; set; }
        public string Mention { get; set; }

        public bool Returned { get; set; }
        public DateTime? DataReturn { get; set; }
        public string MentionReturn { get; set; }

        public int StoreId { get; set; }
        public Store Store { get; set; }


        public int BookId { get; set; }
        public Book Book { get; set; }

        public int BibliotecaUserId { get; set; }
        public BibliotecaUser BibliotecaUser { get; set; }
    }
}
