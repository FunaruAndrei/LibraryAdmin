using BibliotecaOnline.Areas.Identity.DbModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BibliotecaOnline.Controllers
{
    public class AuthController: Controller
    {

        public AuthController() {

        }

        public IActionResult LoginCheck()
        {
            if (User.Identity.IsAuthenticated)
            {
                if (User.IsInRole("Admin"))
                {
                    return RedirectToAction("Admin", "Admin", new { area = "" });
                }else
                {
                    return RedirectToAction("Index", "Home", new { area = "" });
                }
            }else
            {
                return RedirectToAction("Login", "Account", new { area = "Identity" });
            }
        }

    }
}
