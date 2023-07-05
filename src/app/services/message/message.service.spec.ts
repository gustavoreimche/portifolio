import { TestBed, inject } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MessageService } from './message.service';
import { Overlay } from '@angular/cdk/overlay';

describe('MessageService', () => {
  let service: MessageService;
  let snackBar: MatSnackBar;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      providers: [MessageService, MatSnackBar, Overlay],
    });

    service = TestBed.inject(MessageService);
    snackBar = TestBed.inject(MatSnackBar);
  });

  it('should open a snackbar with the provided message', () => {
    const message = 'Test message';

    spyOn(snackBar, 'open');

    service.showMessage(message);

    expect(snackBar.open).toHaveBeenCalledWith(
      message,
      'X',
      jasmine.objectContaining({
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      })
    );
  });
});
