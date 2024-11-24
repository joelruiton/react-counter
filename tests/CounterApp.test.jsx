import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en <CounterApp />', () => {
  test('Debe de hacer match con el snapshot', () => {
    const { container } = render(<CounterApp />);
    expect(container).toMatchSnapshot();
  });
  
  test('Debe mostrar el valor inicial de 100', () => {
    const initialValue = 100;
    render(<CounterApp value={initialValue} />);
    expect(screen.getByText(`${initialValue}`)).toBeTruthy();
    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(`${initialValue}`);
  });

  test('Debe de incrementar con el boton +1', () => {
    const initialValue = 100;
    render(<CounterApp value={initialValue} />);
    fireEvent.click( screen.getByText('+1') );
    expect(screen.getByText('101')).toBeTruthy();
  });

  test('Debe de decrementar con el boton -1', () => {
    const initialValue = 100;
    render(<CounterApp value={initialValue} />);
    fireEvent.click( screen.getByText('-1') );
    expect(screen.getByText('99')).toBeTruthy();
  });

  test('Debe de funcionar el boton de reset', () => {
    const initialValue = 100;
    render(<CounterApp value={initialValue} />);
    fireEvent.click( screen.getByText('+1') );
    fireEvent.click( screen.getByText('+1') );
    fireEvent.click( screen.getByText('+1') );
    //fireEvent.click( screen.getByText('Reset') );
    fireEvent.click( screen.getByRole('button', { name: 'btn-reset'} ) );
    expect(screen.getByText(`${initialValue}`)).toBeTruthy();
  });
});
