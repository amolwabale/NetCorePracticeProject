using Library.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PracticeProject.Filters;

namespace PracticeProject.Controllers
{
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IJwtTokenManager _jwtTokenManager;
        public AuthController(IJwtTokenManager jwtTokenManager)
        {
            _jwtTokenManager = jwtTokenManager;
        }

        [AllowAnonymous]
        [HttpPost("Authenticate")]
        public IActionResult Login([FromBody] UserCredentials userCredential)
        {
            
            var token = _jwtTokenManager.Authenticate(userCredential.UserName, userCredential.Password);
            return Ok(new { jwt = token });
            
        }
    }
}
