﻿using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BibliotecaOnline.Controllers
{
    public class AdminController: Controller
    {
        public IActionResult Admin()
        {
            return View();
        }
    }
}
