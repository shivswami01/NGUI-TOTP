using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.Models
{
    public class ExpiredOTP
    {
        public string? UserID { get; set; }
        public long? OTP { get; set; }
    }
}
