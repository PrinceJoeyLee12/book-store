import Card from './Card';
import Link from './Link';
import Lists from './List';
import Button from './Button';

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
  return Object.assign(Card(theme), Link(theme), Lists(theme), Button(theme));
}
