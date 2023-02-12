export default function extractFields({ special }) {
  return special.map(({ description = 'Описание недоступно', ...rest }) => ({ ...rest, description }));
}
