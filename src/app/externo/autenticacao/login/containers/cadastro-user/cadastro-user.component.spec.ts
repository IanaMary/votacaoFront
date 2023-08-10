import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CadastroUserComponent } from './cadastro-user.component';

describe('CadastroUserComponent', () => {
  let component: CadastroUserComponent;
  let fixture: ComponentFixture<CadastroUserComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
