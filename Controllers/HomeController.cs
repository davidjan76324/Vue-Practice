using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using vue_practice.Models;

namespace vue_practice.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Index_2()
        {
            return View();
        }

        public IActionResult Index_3()
        {
            return View();
        }
        public IActionResult Index_4()
        {
            return View();
        }
        public IActionResult Index_5()
        {
            return View();
        }
        public IActionResult Index_6()
        {
            return View();
        }
        public IActionResult Index_7()
        {
            return View();
        }
        public IActionResult Index_8()
        {
            return View();
        }
        public IActionResult Index_9()
        {
            return View();
        }
        public IActionResult Index_10()
        {
            return View();
        }
        public IActionResult Index_11()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
