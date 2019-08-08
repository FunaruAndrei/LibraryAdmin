using BibliotecaOnline.Areas.Identity.DbModels;
using BibliotecaOnline.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BibliotecaOnline.Controllers
{
    public class ContextSeedDataController:Controller
    {
        private UserManager<BibliotecaUser> _userManager;
        private RoleManager<IdentityRole<int>> _roleManager;
        private BibliotecaOnlineContext _context;
        public ContextSeedDataController(UserManager<BibliotecaUser> userManager,
            RoleManager<IdentityRole<int>> roleManager,
            BibliotecaOnlineContext context)
        {
            this._userManager = userManager;
            this._roleManager = roleManager;
            this._context = context;
        }

        public async Task<IActionResult> Seed() {

            try
            {
                await this._roleManager.CreateAsync(new IdentityRole<int>()
                {
                    Name = "Admin"
                });

                await this._roleManager.CreateAsync(new IdentityRole<int>()
                {
                    Name = "BasicUser"
                });

                var user = await this._userManager.GetUserAsync(HttpContext.User);

                await this._userManager.AddToRoleAsync(user, "Admin");


                this._context.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        

        }
    }
}
