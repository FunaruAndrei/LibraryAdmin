using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BibliotecaOnline.Models.Library
{
    public class LoanReq
    {
        public int UserId { get; set; }
        public int StoreId { get; set; }
        public int BookId { get; set; }
        public string Mention { get; set; }
    }
}
