import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {
  test('getHeroeById debe retornar un heroe por Id', () => {
    const id = 1;
    const hero = getHeroeById(id);
    expect(hero).toEqual({id: 1, name: 'Batman', owner: 'DC' });
  });
  
  test('getHeroeById debe retornar undefined si no existe', () => {
    const id = 100;
    const hero = getHeroeById(id);
    expect(hero).toBeFalsy();
  });

  test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () => {
    const owner = 'DC';
    const heros = getHeroesByOwner(owner);
    expect(heros.length).toBe(3);
    expect(heros).toEqual([{ id: 1, name: 'Batman', owner: 'DC' },
    { id: 3, name: 'Superman', owner: 'DC' },
    { id: 4, name: 'Flash', owner: 'DC' }]);
  });

  test('getHeroesByOwner debe retornar un arreglo con los heroes de Marvel', () => {
    const owner = 'Marvel';
    const heros = getHeroesByOwner(owner);
    expect(heros.length).toBe(2);
  });
})
