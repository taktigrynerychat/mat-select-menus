import { Directive, ElementRef, Input, HostListener } from "@angular/core";

@Directive({
  selector: "[dropDownStyleActions]"
})
export class DropdownStyleActionsDirective {

  readonly el: HTMLElement;
  @Input("dropDownStyleActions") isEnabled: boolean;
  public isToggledSelectDropdown: boolean;

  constructor(el: ElementRef) { this.el = el.nativeElement; }

  @HostListener("click", ["$event"])
  @HostListener("keyup", ["$event"])
  public styleSelectDropdownActions(event: any) {
    const dropdown = document.getElementsByClassName("cdk-overlay-pane") as HTMLCollectionOf<HTMLElement>;
    let selectLineRect, dropdownID;
    const target = event.currentTarget;
    const selectLine = target.getElementsByClassName("mat-form-field-underline") as HTMLCollectionOf<HTMLElement>;
    if (selectLine.length > 0) {
      selectLineRect = selectLine[0].getBoundingClientRect();
    }

    const selectPanel = document.getElementsByClassName("mat-select-panel") as HTMLCollectionOf<HTMLElement>;

    const windowHeight = window.innerHeight;
    if (dropdown.length > 0 && this.isEnabled) {
      // @ts-ignore
      for (const item of dropdown) {
        dropdownID = document.getElementById(item.id);
        dropdownID.style.top = "auto";
        dropdownID.style.bottom = "auto";
        dropdownID.style.left = "auto";
        dropdownID.style.boxShadow = "1px 2px 1px rgba(224,224,224,0.5)";
      }
      // @ts-ignore
      for (const panel of selectPanel) {
        panel.style.maxHeight = "none";
      }
      // @ts-ignore
      for (const item of dropdown) {
        dropdownID = document.getElementById(item.id);
        dropdownID.style.top = `${selectLineRect.top}px`;
        dropdownID.style.left = `${selectLineRect.left}px`;
        dropdownID.style.minWidth = `${selectLineRect.width}px`;
      }
      // @ts-ignore
      for (const panel of selectPanel) {
        panel.style.maxHeight = `${windowHeight - selectLineRect.bottom}px`;
      }
    }
    window.onresize = function () {

      // @ts-ignore
      for (const item of dropdown) {
        dropdownID = document.getElementById(item.id);
        dropdownID.style.display = "none";
        dropdownID.style.minWidth = "auto";
        dropdownID.style.left = "auto";
        dropdownID.style.top = "auto";
      }
      setTimeout(function () {
        const windowHeightResized = window.innerHeight;
        const selectLineRectNew = selectLine[0].getBoundingClientRect();
        // @ts-ignore
        for (const item of dropdown) {
          dropdownID = document.getElementById(item.id);
          dropdownID.style.top = `${selectLineRectNew.top}px`;
          dropdownID.style.left = `${selectLineRectNew.left}px`;
          dropdownID.style.minWidth = `${selectLineRectNew.width}px`;
          dropdownID.style.display = "block";
        }
        // @ts-ignore
        for (const panel of selectPanel) {
          panel.style.maxHeight = `${windowHeightResized - selectLineRectNew.bottom}px`;
        }
      }, 500);
    };
  }

}
