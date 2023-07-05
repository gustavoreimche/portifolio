import { TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { ContactComponent } from './contact.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageService } from 'src/app/services/message/message.service';
import { Overlay } from '@angular/cdk/overlay';

describe('ContactComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactComponent],
      providers: [
        FormBuilder,
        HttpClient,
        HttpHandler,
        MatSnackBar,
        MessageService,
        Overlay,
      ], // Adicione o FormBuilder como provedor
    });
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
