using BusinessLogic.Interfaces;
using Common.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using OtpNet;
using System.Reflection.Emit;
using System.Text;

namespace UI.APIService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private IUserListBLL userData;
       
        public HomeController(IUserListBLL userData)
        {
            this.userData = userData;
        }

        [HttpGet]
        public string GetOTP(string userId, string sDate)
        {
            long otpNumber = 0;
            DateTime userSelectedDateTime = Common.Extenstion.GetDate(sDate);
            if (this.userData.ValidateUser(userId))
            {
                Random rand = new Random();
                otpNumber = rand.Next(999999);
                if (otpNumber.ToString().Length != 6)
                {
                    string otpNew = rand.Next(0, 1000000).ToString("D6");
                    otpNumber = Convert.ToInt64(otpNew);
                }
            }
            else
            {
                otpNumber = -1;
            }
            return otpNumber.ToString();
        }

        #region TOTP Based OTP generation by using dll similar like google authendicator --pending implementation
        [NonAction]
        public string TOTPBySecretKey(string userSecretKey)
        {
            string result = string.Empty;
            long totp = Common.Extenstion.TOTPGenerator(userSecretKey);
            if (totp != 0)
            {
                result = totp.ToString().Trim();
            }
            return result;
        }
        #endregion
    }
}
