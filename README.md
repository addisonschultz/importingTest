# Loupe Design Syste

Welcome to [Loupe 2019](https://framer.com/loupe), a conference on interactive design and creative coding.

Here at Framer, we're aiming to fully bridge the gap between designers and developers, through collaboration and shared design systems. Today, we'll be exploring this workflow together!

## Overview

We'll be splitting up into smaller teams, with at least one developer and one designer. Our goal is to create a shared design system with components built ready for both Framer X and Production. Through this, we'll gain a deeper understanding of what the collaboration aspect looks like in Framer X.

## Prerequisites

We have a few pre-requisites you'll need in order to follow along.

- [Node.js](https://nodejs.org/en/)
- [Git](https://git-scm.com/)
- [Text/Code Editor](https://code.visualstudio.com/)
- Framer X

## Getting Started

We'll be using [styled-components](https://www.styled-components.com/) to make designing and coding our components more streamlined. This also allows us to integrate more fully with Framer X, if we use variables from Framer inside of our code. This is already listed as a dependency, and will get installed when you first clone and run `yarn` in this project.

You'll be using Framer Web to collaborate with designers in real-time, but can also open the design-system.framerfx file in Desktop Framer X to see the visual version of the component you're building.

1. [Fork this repository](https://help.github.com/en/articles/fork-a-repo).
1. [Clone the forked repository](https://help.github.com/en/articles/cloning-a-repository) locally.
1. Run `yarn` to install dependencies.
1. Open design-system.framerfx locally in Framer X
1. When your component is made, stage and commit your changes, and then push them to github.
1. [Make a pull request](https://help.github.com/en/articles/creating-a-pull-request-from-a-fork) to merge back into the master branch.

Our repository is already configured to run framer-cli commands, which will allow us to publish our components automatically when we commit new changes!

We have some already defined colors, fonts, and spacing values ready to be used, which you can use as varibles in your code. See the examples below on how to use the Loupe theme to stay true to the Loupe Design System.

---

#### Using Colors Example:

```
import { theme } from "../theme";
import styled from "styled-components"

const StyledElement = styled.div`
    color: ${theme.color.primary};
`
```

There are a total of 8 colors from the Loupe Design System:

![#0055FF](https://placehold.it/15/0055FF/000000?text=+) <span style="background:#0055FF; color: white">#0055FF</span> - `primary`

![#98E7FF](https://placehold.it/15/98E7FF/000000?text=+) <span style="background:#98E7FF; color: black">#98E7FF</span> - `secondary`

![#E7FFF7](https://placehold.it/15/E7FFF7/000000?text=+) <span style="background:#E7FFF7; color: black">#E7FFF7</span> - `accentLight`

![#FFC6A8](https://placehold.it/15/FFC6A8/000000?text=+) <span style="background:#FFC6A8; color: black">#FFC6A8</span> - `accentDark`

![#000000](https://placehold.it/15/000000/000000?text=+) <span style="background:#000000; color: white">#000000</span> - `black`

![#8A8A8A](https://placehold.it/15/8A8A8A/000000?text=+) <span style="background:#8A8A8A; color: white">#8A8A8A</span> - `grey`

![#FAFAFA](https://placehold.it/15/FAFAFA/000000?text=+) <span style="background:#FAFAFA; color: black">#FAFAFA</span> - `lightGrey`

![#FFFFFF](https://placehold.it/15/FFFFFF/000000?text=+) <span style="background:#FFFFFF; color: black">#FFFFFF</span> - `white`

---

#### Using Spacing Example:

```
import { theme } from "../theme";
import styled from "styled-components"

const StyledElement = styled.div`
    padding: ${theme.space[0]};
`
```

There are a total of 5 spacing options from the Loupe Design System:

0px - `${theme.space[0]}`

4px - `${theme.space[1]}`

8px - `${theme.space[2]}`

16px - `${theme.space[3]}`

32px - `${theme.space[4]}`

---

#### Using Fonts Example:

```
import { theme } from "../theme";
import styled from "styled-components"

const StyledElement = styled.div`
    font-family: ${theme.font};
`
```

We have a collection of preset official Loupe fonts that will render in your components when using the font variable method described above.

---

#### CSS Selectors and Props in `styled-components`

Here are common patterns to add CSS Selectors to your components, like `hover` and `active` in styled-components.

```
import styled from "styled-components"

const StyledElement = styled.div`
    color: ${theme.color.primary};
    &:hover {
        // Define CSS when hovered
    }
    &:active {
        // Define CSS when active
    }
`
```

---

#### Component States and Props in `styled-components`

Here are common patterns to add className states to your components, like `primary` or `secondary` in styled-components. These might be controlled by a prop that is passed into the component when it renders.

```
import styled from "styled-components"

type Props = {
    secondary: boolean;
}

// Styled Component
const StyledElement = styled.div`
    color: ${theme.color.primary};
    &.secondary {
        // Define CSS when prop for secondary is true
    }
`

// Main Component
export const Element: React.FC<Props> = ({
  secondary
}) => (
  <StyledElement
    className={`${secondary ? "secondary" : ""}`}
  />
)
```

---

#### Components:

We have a list of components you can pick from to help build our design system:

- Button
- CTA Link
- Card
- Hero
- Banner
- Avatar
- Icon
- Checkbox
- Radio Button
- Navigation
- Chip
- List
- Input
- Select
- Segment
- Loader
- Slider
- Stepper

---

## Important Notes:

When pull requests are made, the components made will be run through some tests to make sure they will compile correctly. It's important to make sure to have the following defined in order to pass all checks:

- **Type definitions**

We're going to be making Typescript React Components, so for any props you want to use in your components, it's important to rembeber to include type definitions. This is how Framer X will know what Property Control to assign to your component when it's being rendered in Framer X.

```
type Props = {
    text: string
}

export function Element(props: Props) {
    return <StyledElement />
}
```

- **Default Exports**

It's also important to remember to include your component and it's props in the export contained by index.tsx. An example export in index.tsx might look like this:

```
export { Example, Props as ExampleProps } from "./components/Example";
```
