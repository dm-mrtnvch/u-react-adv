import {fireEvent} from "@storybook/testing-library";
import {screen} from "@testing-library/react";
import {RenderWithTranslation} from "shared/lib/tests/renderWithTranslation/renderWithTranslation";
import {Sidebar} from "widgets/Sidebar";

describe('Sidebar', () => {
  test('clear Sidebar', () => {
    RenderWithTranslation(<Sidebar/>)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  });

  test('toggle test', () => {
    RenderWithTranslation(<Sidebar/>)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  });
})
