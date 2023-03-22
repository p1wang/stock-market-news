import { Link, List, ListItem, ListItemText, Typography } from "@mui/material";

function DayWatchList({ data, title }) {
  return (
    <List>
      <Typography variant="h5">{title}</Typography>
      {data.map((item) => (
        <ListItem
          key={item.id}
          component={Link}
          href={`/stocks/${item.slug}`.toLowerCase()}
        >
          <ListItemText
            primary={item.slug.toUpperCase()}
            secondary={item.name}
          />
        </ListItem>
      ))}
    </List>
  );
}

export default DayWatchList;
