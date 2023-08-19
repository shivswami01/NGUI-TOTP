using BusinessLogic.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace UI.APIService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private IUserListBLL userData;
        public HomeController(IUserListBLL userData) {
            this.userData = userData;
        }

        [HttpGet]
        public string GetOTP(string userId, string sDate)
        {
            DateTime userSelectedDateTime = Common.Extenstion.GetDate(sDate);
            long otpNumber = 0;
            if (ValidateUser(userId))
            {
                Random rand = new Random();
                otpNumber = rand.Next(999999);
            }
            else
            {
                otpNumber = -1;
            }
            return otpNumber.ToString();

        }

        [HttpPost]
        public string VerifyOTP(long otpNumber)
        {
            
            return "Verified";
        }

        [NonAction]
        public bool ValidateUser(string userId) 
        {
            bool result = false;
            if(userId!= string.Empty || userId !=null)
            {
                var users = userData.GetAllUserList();

                var user =  users.Where(x=>x.UserId == userId).FirstOrDefault();
                if(user!=null)
                {
                    result = true;
                }
            }
            return result;
        }
    }
}
