import * as React from "react";
import { PhoneCall, Mail } from "lucide-react";

import { Container } from "../ui/container";
import { Badge } from "../ui/section/badge";
import { InnerSection } from "../ui/section/inner-section";
import { ListIcons } from "../ui/card/list-icons";
import { FormGroup } from "../ui/forms/form-group";
import { InputText } from "../ui/forms/input-text";
import { FormLabel } from "../ui/forms/form-label";
import { InputTextarea } from "../ui/forms/input-textarea";
import { Button } from "../ui/button";

export function ContactStart() {
  return (
    <section className="mt-[101px] mb-[120px]">
      <Container className="container flex flex-wrap items-center justify-between gap-y-20">
        <InnerSection className="max-w-[502px]">
          <Badge>CONTACT</Badge>
          <h1 className="page-title mt-[13px] text-white">
            We love receiving messages from you, we are waiting for it.
          </h1>
          <ul className="mt-[50px] space-y-[30px]">
            <ListIcons
              Icon={PhoneCall}
              value="+62 1234 8921"
              text="Phone"
              keyValue
            />
            <ListIcons
              Icon={Mail}
              value="support@collosal.tld"
              text="Email"
              keyValue
            />
          </ul>
        </InnerSection>
        <form className="mx-auto flex max-w-[412px] flex-col space-y-7 rounded-[5px] bg-light px-9 pt-[52px] pb-9 max-[412px]:px-6 lg:mx-0">
          <FormGroup className="space-x-4">
            <FormLabel htmlFor="name">
              Name
              <InputText id="name" type="text" className="mt-[6px]" />
            </FormLabel>
            <FormLabel htmlFor="email">
              Email
              <InputText id="email" type="email" className="mt-[6px]" />
            </FormLabel>
          </FormGroup>
          <FormLabel htmlFor="subject">
            Subject
            <InputText id="subject" type="text" className="mt-[6px]" />
          </FormLabel>
          <FormLabel htmlFor="message">
            Message
            <InputTextarea id="message" rows={7} className="mt-[6px]" />
          </FormLabel>
          <Button type="submit" variant="solid-primary" size="lg">
            Send Message
          </Button>
        </form>
      </Container>
    </section>
  );
}
