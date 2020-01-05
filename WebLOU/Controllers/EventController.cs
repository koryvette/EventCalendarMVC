using System;
using System.Linq;
using System.Web.Mvc;

namespace WebLOU.Controllers
{
    public class EventController : Controller
    {
        EventContext db = new EventContext();

        public ActionResult Index()
        {
            var  events = db.Events.Where(x=> x.Start_Date >= DateTime.Now).OrderBy(x => x.Start_Date).ToList();
            return View(events);
        }

    }
}