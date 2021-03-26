import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { HomeComponent } from './home.component';
// import { IAppState } from '../../store/app.states';
import { provideMockStore } from '@ngrx/store/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  // let store: IAppState;

  beforeEach(async(() => {
    const initialState = {
      isAuthenticated: false,
      user: {},
      error: false
    };

    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({})
      ],
      declarations: [HomeComponent],
      providers: [
        provideMockStore({ initialState })   // use test store instead of ngrx store
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
