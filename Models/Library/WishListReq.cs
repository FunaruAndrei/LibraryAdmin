using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BibliotecaOnline.Models.Library
{
    public class WishListReq
    {
        public int UserId { get; set; }
        public int BookId { get; set; }
        public bool WishListed { get; set; }
    }
}
