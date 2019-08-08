using BibliotecaOnline.Areas.Identity.DbModels;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BibliotecaOnline.DbModels
{
    public class Review
    {
        [Key]
        public int ReviewId { get; set; }

        public double Rate { get; set; }
        public string Text { get; set; }
        public DateTime Data { get; set; }

        public int BookId { get; set; }
        public Book Book { get; set; }

        public int BibliotecaUserId { get; set; }
        public BibliotecaUser BibliotecaUser { get; set; }
    }
}
