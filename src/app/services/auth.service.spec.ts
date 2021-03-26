import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';


describe('Auth service:', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
      imports: [HttpClientTestingModule]
    });
    // HttpClientTestingModule - Extended interactions between a data service and the HttpClient can be complex
    // and difficult to mock with spies.
    //  The HttpClientTestingModule can make these testing scenarios more manageable.
  });
  describe(':', () => {

    function setup() {
      const authService = TestBed.get(AuthService);
      const httpTestingController = TestBed.get(HttpTestingController);
      return { authService, httpTestingController };
    }

    afterEach(() => {
      const { httpTestingController } = setup();
      httpTestingController.verify();
    });
  });
});