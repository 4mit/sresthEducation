import { Card, Collapse, Grid } from "@nextui-org/react";
import BlogCategories from "../BlogCategories";

const faqList = [
  {
    title: 'What is Shresth Education Institute ? ',
    subtitle: '',
  },
  {
    title: 'How can i request for new feature ? ',
    subtitle: '',
  },
  {
    title: 'How to refer LearningHub to my friend ? ',
    subtitle: '',
  },
  {
    title: 'How to share an article to all social media plateform',
    subtitle: '',
  },
];

const Faq = () => {
    return (
      <div className="p-5">
        <h3 className="ml-9">FAQ</h3>
        <div className="p-5">
          <Collapse.Group>
            {faqList.map((faq, i) => {
              return (
                <Collapse
                  title={<p>{faq.title}</p>}
                  subtitle={faq.subtitle}
                ></Collapse>
              );
            })}
          </Collapse.Group>
        </div>
      </div>
    );
}   

export default Faq;