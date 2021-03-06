import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Fragment } from "react";

import { CountryListProps } from "../../types/Types";

const List = ({ countryDetail }: CountryListProps) => {
  const getfirstInput = (obj: {}) => {
    const firstInput = Object.keys(obj)[0];
    return firstInput;
  };
  return (
    <Fragment>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Other Names</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{countryDetail.altSpellings.join(" | ")}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Region</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{countryDetail.region}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Borders</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {countryDetail.borders ? (
            countryDetail.borders.join(" | ")
          ) : (
            "None Borders"
          )}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography>Currencies</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {countryDetail.currencies ? (
            countryDetail.currencies[getfirstInput(countryDetail.currencies)]
              .name
          ) : (
            "None Currencies"
          )}
        </AccordionDetails>
      </Accordion>
    </Fragment>
  );
};

export default List;
