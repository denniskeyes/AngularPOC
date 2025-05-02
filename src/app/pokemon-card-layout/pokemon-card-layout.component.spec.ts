import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCardLayoutComponent } from './pokemon-card-layout.component';

describe('PokemonCardLayoutComponent', () => {
  let component: PokemonCardLayoutComponent;
  let fixture: ComponentFixture<PokemonCardLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonCardLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonCardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
