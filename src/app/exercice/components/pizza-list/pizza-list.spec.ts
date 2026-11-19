import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaList } from './pizza-list';

describe('PizzaList', () => {
  let component: PizzaList;
  let fixture: ComponentFixture<PizzaList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzaList],
    }).compileComponents();

    fixture = TestBed.createComponent(PizzaList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove the selected pizza', () => {
    const initialCount = component.pizzasList().length;

    component.removePizza(1);

    expect(component.pizzasList()).toHaveLength(initialCount - 1);
    expect(component.pizzasList().some((pizza) => pizza.id === 1)).toBe(false);
  });

  it('should remove only the selected pizza comment', () => {
    component.removeComment({ pizzaId: 1, commentId: 1 });

    expect(component.pizzasList().find((pizza) => pizza.id === 1)?.comments)
      .toEqual([{ id: 2, author: 'Yassine', text: 'Une pizza généreuse.' }]);
  });
});
