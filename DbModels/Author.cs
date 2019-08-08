using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BibliotecaOnline.DbModels
{
    public class Author
    {
        [Key]
        public int AuthorId { get; set; }
        public string Name { get; set; }
        public DateTime? BirthDay { get; set; }
        public string Birthplace { get; set; }
        public string Description { get; set; }

        public ICollection<BookAuthor> BookAuthors { get; set; }
    }
}
