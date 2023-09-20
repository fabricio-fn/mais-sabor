import { FlexBoxContainer } from "../FlexBoxContainer/FlexBoxContainer";
import { StyleNewsletter } from "./StyleNewsletter";
import { StyleText } from "../Text/StyleText";
import FormNewsletter from "./FormNewsletter/FormNewsletter";

export default function Newsletter() {
  return (
    <StyleNewsletter>
      <FlexBoxContainer className="content">
        <StyleText tag="h2" color="dark" fontSize="sm">
          Subscribe Our Newsletter
        </StyleText>

        <StyleText tag="p" color="gray" fontSize="xs">
          Best cooks and the best delivery guys all at your service. 
          Hot tasty food will reach you in 60 minutes.
        </StyleText>
      </FlexBoxContainer>

      <FormNewsletter />
    </StyleNewsletter>
  )
}