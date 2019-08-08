using BibliotecaOnline.Areas.Identity.DbModels;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BibliotecaOnline.DbModels
{
    public class WishList
    {
        [Key]
        public int WishListId { get; set; }
        public DateTime AddDate { get; set; }

        public int BookId { get; set; }
        public Book Book { get; set; }

        public int BibliotecaUserId { get; set; }
        public BibliotecaUser BibliotecaUser { get; set; }
    }
}
