import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { getProducts } from "../../Redux/Products/Action";
import { useDispatch, useSelector } from "react-redux";
import store from "../../Redux/Store/store";

const dummyProducts = {
  products: {
    content: [
      {
        id:"1",
        name: "Product 1",
        title: "Title 1",
        price: 10,
        minDiscount: 5,
        brand: "Brand 1",
        color: "Red",
        size: "Small",
        category: "dress",
      },
      {
        id:"2",
        name: "Product 1",
        title: "Title 1",
        price: 10,
        minDiscount: 5,
        brand: "Brand 1",
        color: "Red",
        size: "Small",
        category: "dress",
      },
      {
        id:"3",
        name: "Product 1",
        title: "Title 1",
        price: 10,
        minDiscount: 5,
        brand: "Brand 1",
        color: "Red",
        size: "Small",
        category: "dress",
      },
      {
        id:"4",
        name: "Product 2",
        title: "Title 2",
        price: 20,
        minDiscount: 10,
        brand: "Brand 2",
        color: "Blue",
        size: "Medium",
        category: "dress",
      },
      {
        id:"5",
        name: "Product 1",
        title: "Title 1",
        price: 10,
        minDiscount: 5,
        brand: "Brand 1",
        color: "Red",
        size: "Small",
        category: "dress",
      },
      {
        id:"6",
        name: "Product 1",
        title: "Title 1",
        price: 10,
        minDiscount: 5,
        brand: "Brand 1",
        color: "Red",
        size: "Small",
        category: "dress",
      },
      // Add more dummy products here if needed
    ],
  },
};

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(name, title, price, minDiscount, brand, color, size) {
  return { name, title, price, minDiscount, brand, color, size };
}

export default function AdminProducts() {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.products);
  console.log(products);

  React.useEffect(() => {
    const data = {
      category: "dress",
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 10,
      minDiscount: 0,
      sort: "price_high",
      pageNumber: 1,
      pageSize: 10,
      stock: "",
    };
    dispatch(getProducts(data));
  }, []);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Update rows based on products
  const productsData = dummyProducts.products
    ? dummyProducts.products.content.map((product) =>
        createData(
          product.name,
          product.title,
          product.price,
          product.minDiscount,
          product.brand,
          product.color,
          product.size,
          product.category,
          product.minDiscount
        )
      )
    : [];

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - productsData.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableBody>
          {(rowsPerPage > 0
            ? productsData.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : productsData
          ).map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.title}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.price}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.color}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.minDiscount}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.brand}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.category}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.size}
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={productsData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

