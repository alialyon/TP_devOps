import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleFonctionnaliteComponent } from './nouvelle-fonctionnalite.component';

describe('NouvelleFonctionnaliteComponent', () => {
  let component: NouvelleFonctionnaliteComponent;
  let fixture: ComponentFixture<NouvelleFonctionnaliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NouvelleFonctionnaliteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvelleFonctionnaliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
