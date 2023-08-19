using BusinessLogic.Interfaces;
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
        private IUserListBLL userData;
        public HomeControllerTest(IUserListBLL userData) 
        { this.userData = userData; }

        [TestMethod]
        public void TestOTPNumber()
        {
            HomeController homeController = new HomeController(this.userData);

            string otpNumber = homeController.GetOTP("Test1",DateTime.Now.ToShortDateString());

            Assert.IsNotNull(otpNumber);
        }
    }
}
