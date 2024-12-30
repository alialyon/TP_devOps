import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpDevOpsComponent } from './tp-dev-ops.component';

describe('TpDevOpsComponent', () => {
  let component: TpDevOpsComponent;
  let fixture: ComponentFixture<TpDevOpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TpDevOpsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TpDevOpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
