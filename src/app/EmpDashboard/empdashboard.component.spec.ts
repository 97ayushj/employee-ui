import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmpdashboardComponent } from './empdashboard.component';



describe('EmpdashboardComponent', () => {
  let component: EmpdashboardComponent;
  let fixture: ComponentFixture<EmpdashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpdashboardComponent]
    });
    fixture = TestBed.createComponent(EmpdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
