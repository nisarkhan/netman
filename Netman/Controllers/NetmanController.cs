using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Netman.Controllers
{
    public class NetmanController : Controller
    {
        // GET: Netman
        public ActionResult Index()
        {
            return View();
        }

        // GET: Netman/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Netman/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Netman/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Netman/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Netman/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Netman/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Netman/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
