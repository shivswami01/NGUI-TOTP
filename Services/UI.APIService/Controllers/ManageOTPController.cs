using BusinessLogic.Interfaces;
using Common.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace UI.APIService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ManageOTPController : ControllerBase
    {
        private IExpiredOTPListBLL expiredOTP;
        public ManageOTPController(IExpiredOTPListBLL expiredOTP)
        {
            this.expiredOTP = expiredOTP;
        }

        [HttpPost("Expireotp")]
        public IActionResult ExpireOTP([FromBody] ExpiredOTP expiredOTP)
        {
            string result = this.expiredOTP.SaveExpiredOTPList(expiredOTP);
            Console.WriteLine(result);
            return Ok();
        }

        [HttpPost("ValidateOTP")]
        public string ValidateOTP([FromBody] ExpiredOTP expiredOTP)
        {
            string result = string.Empty;
            IList<ExpiredOTP> list = this.expiredOTP.GetExpiredOTP();

            var isOTPExist = list.Where(x => x.UserID == expiredOTP.UserID && x.OTP == expiredOTP.OTP).ToList();
            if (isOTPExist.Any())
            {
                result = "-1";
            }
            else
            {
                result = "0";
            }
            return result;
        }
    }
}
