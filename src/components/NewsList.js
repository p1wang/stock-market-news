import { Box, Link, List, ListItem } from "@mui/material";
import Image from "next/image";

function NewsList({ data }) {
  return (
    <List>
      {data.map((item) => (
        <ListItem key={item.id} divider>
          <Box>
            <Image
              src={item.attributes.gettyImageUrl || "/news.jpg"}
              alt="news image"
              width={100}
              height={100}
              style={{ objectFit: "contain", marginRight: 20 }}
            />
          </Box>
          <Box>
            <Link
              underline="hover"
              sx={{
                "&:hover": {
                  color: "primary.main",
                },
              }}
              href={`/news/${item.id}`}
            >
              {item.attributes.title}
            </Link>
          </Box>
        </ListItem>
      ))}
    </List>
  );
}

export default NewsList;
