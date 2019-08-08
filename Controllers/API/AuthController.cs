using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BibliotecaOnline.Areas.Identity.DbModels;
using BibliotecaOnline.Models.User;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace BibliotecaOnline.Controllers.API
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : Controller
    {
        private UserManager<BibliotecaUser> _userManager;
        public AuthController(UserManager<BibliotecaUser> userManager) {
            this._userManager = userManager;
            
        }

        public async Task<JsonResult> GetAsync() {

            var usr = await this._userManager.GetUserAsync(HttpContext.User);

            return Json(new User()
            {
                UserId = usr.Id,
                Email = usr.Email,
                UserName = usr.UserName
            });

        }

    }
}