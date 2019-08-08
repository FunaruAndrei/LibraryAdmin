using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BibliotecaOnline.Models.Library
{
    public class ReviewReq
    {
        public int UserId { get; set; }
        public int BookId { get; set; }
        public string Text { get; set; }
        public double Rate { get; set; }
    }
}
