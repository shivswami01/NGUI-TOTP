using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UI.APIService.Controllers;

namespace UI.APIService.Test
{
    [TestClass]
    public class HomeControllerTest
    {
        [TestMethod]
        public void TestOTPNumber()
        {
            HomeController homeController = new HomeController();

            string otpNumber = homeController.GetOTP("Test",DateTime.Now.ToShortDateString());

            Assert.IsNotNull(otpNumber);
        }
    }
}
