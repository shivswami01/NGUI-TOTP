using BusinessLogic.Interfaces;
using Common.Models;
using OtpNet;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Nodes;
using System.Threading.Tasks;
using UI.APIService.Controllers;

namespace UI.APIService.Test.Controllers
{
    [TestClass]
    public class HomeControllerTest
    {
        [TestMethod]
        public void TestOTPNumber()
        {
            IUserListBLL userListBLL = new BusinessLogic.Implementations.UserListBLL();
            HomeController homeController = new HomeController(userListBLL);

            string otpNumber = homeController.GetOTP("Test1", DateTime.Now.ToString("MM/dd/yyyy HH:mm:ss"));

            Assert.IsNotNull(otpNumber);
        }
    }
}
